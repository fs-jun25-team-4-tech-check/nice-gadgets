interface AboutAndTechSpecsProps {
  description: Array<{ title: string; text: string[] }>;
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  cell: string[];
  camera?: string;
  zoom?: string;
}

export const AboutAndTechSpecs = ({
  description,
  screen,
  resolution,
  processor,
  ram,
  cell,
  camera,
  zoom,
}: AboutAndTechSpecsProps) => {
  return (
    <div>
      <h3>About</h3>
      {description.map((item, index) => (
        <div key={index}>
          <strong>{item.title}</strong>
          <p>{item.text.join(', ')}</p>
        </div>
      ))}
      <h3>Technical Specifications</h3>
      <ul>
        <li>Screen: {screen}</li>
        <li>Resolution: {resolution}</li>
        <li>Processor: {processor}</li>
        <li>RAM: {ram}</li>
        <li>Cell: {cell.join(', ')}</li>
        {camera && <li>Camera: {camera}</li>}
        {zoom && <li>Zoom: {zoom}</li>}
      </ul>
    </div>
  );
};
