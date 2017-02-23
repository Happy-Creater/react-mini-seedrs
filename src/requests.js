const requests = {
  fetchAll: `/`,
  // URI param filters
  fetchTargetDesc: `/target_desc`,
  fetchTargetAsc: `/target_asc`,
  fetchOpen: `/open`,
  fetchOpenTargetDesc: `/open_and_target_desc`,
  fetchOpenTargetAsc: `/open_and_target_asc`,
  // Query parms target filters
  fetchSevenFigures: `?target_above=1000000`,
  fetchOneFifty: `?target_below=150000`,
  // Query params sector filters
  fetchAdvertising: `?sector=Advertising%20%26%20Marketing`,
  fetchAutomotive: `?sector=Automotive%20%26%20Transport`,
  fetchClothing: `?sector=Clothing%20%26%20Accessories`,
  fetchContent: `?sector=Content%20%26%20Information`,
  fetchData: `?sector=Data%20%26%20Analytics`,
  fetchEnergy: `?sector=Energy`,
  fetchEntertainment: `?sector=Entertainment`,
  fetchFintech: `?sector=Fintech`,
  fetchFood: `?sector=Food%20%26%20Beverage`,
  fetchGames: `?sector=Games`,
  fetchHealthcare: `?sector=Healthcare`,
  fetchHome: `?sector=Home%20%26%20Personal`,
  fetchProgramming: `?sector=Programming%20%26%20Security`,
  fetchProperty: `?sector=Property`,
  fetchRecruitment: `?sector=Recruitment%20%26%20Procurement`,
  fetchSaaS: `?sector=SaaS/PaaS`,
  fetchTravel: `?sector=Travel, Leisure%20%26%20Sport`,
};

export default requests;
