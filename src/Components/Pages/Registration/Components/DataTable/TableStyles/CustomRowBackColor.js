const customRowBackColor = [
  {
    when: (row) => row.status === "A",
    style: {
      backgroundColor: "#CAFF95",
    },
  },
  {
    when: (row) => row.status === "R",
    style: {
      backgroundColor: "#FFB3B3",
    },
  },
  {
    when: (row) => row.status === "C",
    style: {
      backgroundColor: "#FFF0DC",
    },
  },
  {
    when: (row) => row.actv === false,
    style: {
      backgroundColor: "#808080",
    },
  },
];

export default customRowBackColor;
