type PastPapersOverviewItemProps = {
  icon: string;
  name: string;
  progress: number;
  total: number;
};

const PastPaperOverviewItem = (props: PastPapersOverviewItemProps) => {
  return (
    <li className='py-1 px-2 rounded hover:bg-accent hover:cursor-default'>
      {props.icon} {props.name} (0/??)
    </li>
  );
};

export default PastPaperOverviewItem;