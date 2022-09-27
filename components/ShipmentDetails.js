export default function ShipmentDetails({ shipmentDetails }) {
	return (
		<div className="w-full xl:w-1/2 flex items-start justify-between flex-wrap mb-4">
			{shipmentDetails.map((detail) => (
				<div key={detail.id} className="mr-2">
					<p className="text-sm pb-1 text-slate-600">{detail.name}</p>
					<form
						className="border border-slate-500 w-20 h-10 flex items-center justify-between"
						onSubmit={(e) => e.preventDefault()}
					>
						<input
							className="w-[60%] text-center focus:outline-none p-0 font-bold text-sm text-slate-600"
							type={detail.type}
							placeholder=""
							aria-label={detail.ariaLabel}
							aria-describedby={detail.ariaDescribedBy}
							value={detail.value}
							onChange={detail.onChange}
						/>
						<p className="bg-slate-200 w-[40%] h-full font-bold text-slate-600 text-center text-sm leading-9">
							{detail.unit}
						</p>
					</form>
				</div>
			))}
		</div>
	);
}
