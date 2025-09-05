import { useRef, type JSX } from "react";
import "./style.css";

type CardSliderContainerProps<T> = {
	items: T[];
	renderItem: (item: T, index: number) => React.ReactNode;
	scrollAmount?: number;

	skeletonItem?: React.ReactNode;
	skeletonCount?: number;
	isLoading?: boolean;
};

export const CardSliderContainer = <T,>({
	items,
	scrollAmount = 300,
	renderItem,
	skeletonItem,
	skeletonCount = 12,
	isLoading = false,
}: CardSliderContainerProps<T>): JSX.Element => {
	const containerRef = useRef<HTMLDivElement>(null);

	const scrollLeft = () => {
		containerRef.current?.scrollBy({
			left: -scrollAmount,
			behavior: "smooth",
		});
	};

	const scrollRight = () => {
		containerRef.current?.scrollBy({
			left: scrollAmount,
			behavior: "smooth",
		});
	};

	const visibleItems = isLoading
		? Array.from({ length: skeletonCount })
		: items;

	return (
		<div className="slider-wrapper">
			<button className="scroll-button left" onClick={scrollLeft}>
				◀
			</button>

			<div className="slider-container" ref={containerRef}>
				<div className="slider-track">
					{visibleItems.map((item, index) => (
						<div className="slider-card" key={index}>
							{isLoading && skeletonItem
								? skeletonItem
								: renderItem(item as T, index)}
						</div>
					))}
				</div>
			</div>

			<button className="scroll-button right" onClick={scrollRight}>
				▶
			</button>
		</div>
	);
};
