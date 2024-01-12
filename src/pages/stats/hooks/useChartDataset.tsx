const useChartDataset = () => {
  const datasetForMonth = [
    {
      order: 59,
      monthly: "Jan",
      daily: "",
      weekly: "",
    },
    {
      order: 50,
      monthly: "Fev",
      daily: "",
      weekly: "",
    },
    {
      order: 47,
      monthly: "Mar",
      daily: "",
      weekly: "",
    },
    {
      order: 54,
      monthly: "Apr",
      daily: "",
      weekly: "",
    },
    {
      order: 57,
      monthly: "May",
      daily: "",
      weekly: "",
    },
    {
      order: 60,
      monthly: "June",
      daily: "",
      weekly: "",
    },
    {
      order: 59,
      monthly: "July",
      daily: "",
      weekly: "",
    },
    {
      order: 65,
      monthly: "Aug",
      daily: "",
      weekly: "",
    },
    {
      order: 51,
      monthly: "Sept",
      daily: "",
      weekly: "",
    },
    {
      order: 60,
      monthly: "Oct",
      daily: "",
      weekly: "",
    },
    {
      order: 67,
      monthly: "Nov",
      daily: "",
      weekly: "",
    },
    {
      order: 61,
      monthly: "Dec",
      daily: "",
      weekly: "",
    },
  ];
  const datasetForWeek = [
    {
      order: 20,
      weekly: "weekly 1",
      daily: "",
      monthly: "",
    },
    {
      order: 77,
      weekly: "weekly 3",
      daily: "",
      monthly: "",
    },
    {
      order: 44,
      weekly: "weekly 5",
      daily: "",
      monthly: "",
    },
    {
      order: 54,
      weekly: "weekly 7",
      daily: "",
      monthly: "",
    },
    {
      order: 10,
      weekly: "weekly 9",
      daily: "",
      monthly: "",
    },
    {
      order: 20,
      weekly: "weekly 11",
      daily: "",
      monthly: "",
    },
  ];
  const datasetForDay = [
    {
      order: 100,
      daily: "01 Jan",
      weekly: "",
      monthly: "",
    },
    {
      order: 59,
      daily: "5 Fev",
      weekly: "",
      monthly: "",
    },
    {
      order: 47,
      daily: "10 Mar",
      weekly: "",
      monthly: "",
    },
    {
      order: 20,
      daily: "15 Apr",
      weekly: "",
      monthly: "",
    },
    {
      order: 99,
      daily: "20 May",
      weekly: "",
      monthly: "",
    },
    {
      order: 60,
      daily: "25 June",
      weekly: "",
      monthly: "",
    },
    {
      order: 33,
      daily: "30 July",
      weekly: "",
      monthly: "",
    },
    {
      order: 65,
      daily: "01 Aug",
      weekly: "",
      monthly: "",
    },
    {
      order: 75,
      daily: "05 Sept",
      weekly: "",
      monthly: "",
    },
    {
      order: 60,
      daily: "10 Oct",
      weekly: "",
      monthly: "",
    },
    {
      order: 67,
      daily: "15 Nov",
      weekly: "",
      monthly: "",
    },
    {
      order: 88,
      daily: "20 Dec",
      weekly: "",
      monthly: "",
    },
  ];
  return { datasetForMonth, datasetForWeek, datasetForDay };
};

export default useChartDataset;
