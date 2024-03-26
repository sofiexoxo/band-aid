
import { Item } from '../models';

const FlexboxItem = ({ item }: { item: Item }) => (
    <li className="fb-item">
        <h4 className="fb-name">{item.name}</h4>
        <span className="fb-data">{item.image}</span>
    </li>
);
export default FlexboxItem