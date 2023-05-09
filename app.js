Mocked_data = [
	{ id: "001", spareName: "Oil seals", quantity: "22" },
	{ id: "002", spareName: "Side mirror", quantity: "6" },
	{ id: "003", spareName: "Tyres", quantity: "4" },
	{ id: "004", spareName: "Break pad", quantity: "32" },
	{ id: "005", spareName: "Wheel liner", quantity: "48" },
	{ id: "006", spareName: "Clutch", quantity: "20" },
	{ id: "007", spareName: "Head lamp", quantity: "8" },
];

const barChartContainer = d3
	.select("div")
	.classed("barContainer", true)
	.style("border", "2px solid blue");

const bars = barChartContainer
	.selectAll(".bar")
	.data(Mocked_data)
	.enter()
	.append("div")
	.classed("bar", true)
	.style("width", "50px")
	.style("height", (data) => data.quantity * 5 + "px");
