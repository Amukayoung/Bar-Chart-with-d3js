Mocked_data = [
	{ id: "001", spareName: "Oil seals", quantity: "22" },
	{ id: "002", spareName: "Side mirror", quantity: "6" },
	{ id: "003", spareName: "Tyres", quantity: "4" },
	{ id: "004", spareName: "Break pad", quantity: "32" },
	{ id: "005", spareName: "Wheel liner", quantity: "48" },
	{ id: "006", spareName: "Clutch", quantity: "20" },
	{ id: "007", spareName: "Head lamp", quantity: "8" },
];
console.log("====================================");
console.log(d3);
console.log("====================================");

const barChartContainer = d3.select("svg").classed("barContainer", true);

const xScale = d3
	.scaleBand()
	.domain(Mocked_data.map((data) => data.spareName))
	.rangeRound([0, 400])
	.padding(0.2);
const yScale = d3.scaleLinear().domain([0, 50]).range([250, 0]);

const bars = barChartContainer
	.selectAll(".bar")
	.data(Mocked_data)
	.enter()
	.append("rect")
	.classed("bar", true)
	.attr("width", xScale.bandwidth())
	.attr("height", (data) => 250 - yScale(data.quantity))
	.attr("x", (data) => xScale(data.spareName))
	.attr("y", (data) => yScale(data.quantity));
