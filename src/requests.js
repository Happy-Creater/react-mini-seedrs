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
  fetchFiveFigures: `?target_below=100000`,
  // Query params sector filters
  fetchAdvertising: `?sector=Advertising & Marketing`,
  fetchAutomotive: `?sector=Automotive & Transport`,
  fetchClothing: `?sector=Clothing & Accessories`,
  fetchContent: `?sector=Content & Information`,
  fetchData: `?sector=Data & Analytics`,
  fetchEnergy: `?sector=Energy`,
  fetchEntertainment: `?sector=Entertainment`,
  fetchFintech: `?sector=Fintech`,
  fetchFood: `?sector=Food & Beverage`,
  fetchGames: `?sector=Games`,
  fetchHealthcare: `?sector=Healthcare`,
  fetchHome: `?sector=Home & Personal`,
  fetchProgramming: `?sector=Programming & Security`,
  fetchProperty: `?sector=Property`,
  fetchRecruitment: `?sector=Recruitment & Procurement`,
  fetchSaaS: `?sector=SaaS/PaaS`,
  fetchTravel: `?sector=Travel, Leisure & Sport`,
};

export default requests;
