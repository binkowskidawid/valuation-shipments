export default function DeliveryOptions({ shipmentOptions, receptionOptions }) {
	return (
		<div className="w-full xl:w-3/4 flex items-start justify-between flex-wrap mb-4">
			<div className="flex flex-col">
				<p className="text-sm pb-1 text-slate-600">Nadanie</p>
				<div className="flex">
					{shipmentOptions.map((option) => (
						<div
							key={option.id}
							className="flex items-baseline text-left mb-4 pr-6"
						>
							<input
								onChange={option.onChange}
								type="checkbox"
								id={option.inputIdNameAndHtmlFor}
								className="mr-1 rounded cursor-pointer"
								name={option.inputIdNameAndHtmlFor}
							/>
							<label
								htmlFor={option.inputIdNameAndHtmlFor}
								className="cursor-pointer"
							>
								{option.name}
							</label>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col">
				<p className="text-sm pb-1 text-slate-600">Odbiór</p>
				<div className="flex">
					{receptionOptions.map((option) => (
						<div
							key={option.id}
							className="flex items-baseline text-left mb-4 pr-6"
						>
							<input
								onChange={option.onChange}
								type="checkbox"
								id={option.inputIdNameAndHtmlFor}
								className="mr-1 rounded cursor-pointer"
								name={option.inputIdNameAndHtmlFor}
							/>
							<label
								htmlFor={option.inputIdNameAndHtmlFor}
								className="cursor-pointer"
							>
								{option.name}
							</label>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
