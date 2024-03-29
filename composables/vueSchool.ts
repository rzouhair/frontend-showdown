import type { HomeData, PackageProps } from "~/utils/@types"

export function useVueSchool() {

  const homeData = useState<HomeData>('home_data')
  const plans = useState<PackageProps[]>('plans')
  
  const sanity = useSanity()
  
  async function getHomeData() {
    try {
      const query = groq`{ "home": *[_type == "HomePage"][0] }`

      const homeDataResponse = await sanity.fetch(query)

      if (homeDataResponse.home)
        homeData.value = homeDataResponse.home

      return homeDataResponse.home
    } catch (error) {
      console.error(error)
    }
  }
 
  async function getPlans() {
    try {
      const query = groq`{ "plan": *[_type == "plan"][0..3] }`

      const plansResponse = await sanity.fetch(query)

      if (plansResponse.plan) {
        plans.value = plansResponse.plan?.map((plan: Plan): PackageProps => {
          return {
            id: plan._id,
            title: plan.title,
            icon: '/images/Leaf.png',
            pricePerSeat: plan.price,
            features: plan.bulletPoints.map((bullet) => ({
              id: bullet._key,
              text: bullet.text,
              included: !!bullet.included,
              highlighted: !!bullet.highlighted
            })),
            ...(plan.suggestedCourse ? {
              suggestedCourse: {
                thumbnail: '/images/Masterclass.png',
                title: plan.suggestedCourse
              }
            }: {}),
            link: 'https://www.vueschool.io/'
          }
        })
      }

      return plansResponse.home
    } catch (error) {
      console.error(error)
    }
  }

  return {
    homeData,
    plans,
    getHomeData,
    getPlans
  }
}