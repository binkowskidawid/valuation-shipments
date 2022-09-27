export default function Carriers({ carriers }) {
	return (
		<div className="w-full md:w-3/4 mx-auto flex justify-between items-center flex-wrap">
			{carriers.length === 0 ? (
				<div className="w-full flex flex-col items-center justify-center text-center text-2xl font-bold">
					<p>Dla podanych parametrów brak dostawców</p>
					<p>zmień kryteria wyszukiwania</p>
				</div>
			) : (
				carriers.map((carrier) => (
					<div
						key={carrier.id}
						className="flex items-center border-2 rounded w-[45%] h-[100px] md:h-[150px] mb-4 md:mb-8"
						style={{ borderColor: carrier.color }}
					>
						<div className="flex flex-col justify-start items-start font-bold pl-4 md:pl-10">
							<p className="text-slate-600 text-xl md:text-2xl">
								{carrier.name}
							</p>
							<p className="md:text-xl" style={{ color: carrier.color }}>
								{carrier.price}
							</p>
						</div>
					</div>
				))
			)}
		</div>
	);
}
