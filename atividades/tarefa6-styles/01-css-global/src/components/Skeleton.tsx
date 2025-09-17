interface Props {
	height: string;
	width?: string;
}

export function Skeleton({ height, width = "100%" }: Props) {
	return <div className="skeleton" style={{ height, width }} />;
}
