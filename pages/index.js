import { useEffect, useState } from "react";
import Head from "next/head";
import Carriers from "../components/Carriers";
import DeliveryOptions from "../components/DeliveryOptions";
import ShipmentDetails from "../components/ShipmentDetails";

export default function IndexPage() {
	const [carriers, setCarriers] = useState([]); // State which show filtered and updated data from API, when shipment details or options was changed

	///////////////////// Shipment deatails states ////////////////////////////
	const [weight, setWeight] = useState(0);
	const [width, setWidth] = useState(0);
	const [length, setLength] = useState(0);
	const [height, setHeight] = useState(0);
	//////////////////////////////////////////////////////////////////////////

	///////////////// Shipment and Reception options states //////////////////
	const [shipmentPoint, setShipmentPoint] = useState(null);
	const [shipmentDelivery, setShipmentDelivery] = useState(null);
	const [receptionPoint, setReceptionPoint] = useState(null);
	const [receptionDelivery, setReceptionDelivery] = useState(null);
	//////////////////////////////////////////////////////////////////////////

	////////////////////////// Fetching and filtering data from API /////////////////////////////////
	const url = "https://ak-frontend-task.vercel.app/api/carriers"; // URL adress to API

	useEffect(() => {
		getCarriers();
	}, [
		weight,
		width,
		length,
		height,
		shipmentPoint,
		shipmentDelivery,
		receptionPoint,
		receptionDelivery
	]);

	const getCarriers = async () => {
		const response = await fetch(url);
		const data = await response.json();
		const matchingCarriers = data.filter(
			(element) =>
				element.maxWeight >= weight &&
				element.maxHeight >= height &&
				element.maxWidth >= width &&
				element.maxLength >= length &&
				(element.fromPointShipment !== shipmentPoint || false) &&
				(element.fromDoorShipment !== shipmentDelivery || false) &&
				(element.toPointDelivery !== receptionPoint || false) &&
				(element.toDoorDelivery !== receptionDelivery || false)
		);
		setCarriers(matchingCarriers);
	};
	//////////////////////////////////////////////////////////////////////////////////////////////

	///////////////////// Shipment deatails data ////////////////////////////
	const shipmentDetails = [
		{
			name: "Waga",
			type: "number",
			ariaLabel: "weightValue",
			ariaDescribedBy: "wight-value",
			value: weight,
			onChange: (e) => {
				e.preventDefault();
				setWeight(e.target.value);
			},
			unit: "kg"
		},
		{
			name: "Szerokość",
			type: "number",
			ariaLabel: "widthValue",
			ariaDescribedBy: "width-value",
			value: width,
			onChange: (e) => {
				e.preventDefault();
				setWidth(e.target.value);
			},
			unit: "cm"
		},
		{
			name: "Długość",
			type: "number",
			ariaLabel: "lengthValue",
			ariaDescribedBy: "length-value",
			value: length,
			onChange: (e) => {
				e.preventDefault();
				setLength(e.target.value);
			},
			unit: "cm"
		},
		{
			name: "Wysokość",
			type: "number",
			ariaLabel: "heightValue",
			ariaDescribedBy: "height-value",
			value: height,
			onChange: (e) => {
				e.preventDefault();
				setHeight(e.target.value);
			},
			unit: "cm"
		}
	];
	//////////////////////////////////////////////////////////////////////////

	///////////////////// Shipment options data ////////////////////////////
	const shipmentOptions = [
		{
			name: "W punkcie",
			inputIdNameAndHtmlFor: "shipmentPoint",
			onChange: (e) =>
				e.target.checked === true
					? setShipmentPoint(false)
					: setShipmentPoint(null)
		},
		{
			name: "Podjazd kuriera",
			inputIdNameAndHtmlFor: "shipmentDelivery",
			onChange: (e) =>
				e.target.checked === true
					? setShipmentDelivery(false)
					: setShipmentDelivery(null)
		}
	];
	//////////////////////////////////////////////////////////////////////////

	///////////////////// Reception options data ////////////////////////////
	const receptionOptions = [
		{
			name: "W punkcie",
			inputIdNameAndHtmlFor: "receptionPoint",
			onChange: (e) =>
				e.target.checked === true
					? setReceptionPoint(false)
					: setReceptionPoint(null)
		},
		{
			name: "Podjazd kuriera",
			inputIdNameAndHtmlFor: "receptionDelivery",
			onChange: (e) =>
				e.target.checked === true
					? setReceptionDelivery(false)
					: setReceptionDelivery(null)
		}
	];
	//////////////////////////////////////////////////////////////////////////

	return (
		<>
			<Head>
				<title>AlleKurier.pl - zadanie rekrutacyjne</title>
				<meta
					name="description"
					content="AlleKurier.pl - zadanie rekrutacyjne"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="container mx-auto p-2">
				<div className="w-full md:w-3/4 border-2 border-slate-500 p-6 rounded mb-8 mx-auto ">
					<h2 className="font-bold text-2xl pb-4">Wyceń przesyłkę</h2>
					<ShipmentDetails shipmentDetails={shipmentDetails} />
					<DeliveryOptions
						shipmentOptions={shipmentOptions}
						receptionOptions={receptionOptions}
					/>
				</div>
				<Carriers carriers={carriers} />
			</div>
		</>
	);
}
