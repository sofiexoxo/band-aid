import { Component } from 'react';
import FlexboxItem from './FlexboxItem'; // Verondersteld pad naar FlexboxItem-component
import { Item } from '../models';

interface FlexboxListState {
    items: Item[];
}

class FlexboxList extends Component<{}, FlexboxListState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            items: [
                {
                    name: "Band1",
                    image: "url_to_image1.jpg"
                },
                {
                    name: "Band2",
                    image: "url_to_image2.jpg"
                },
                {
                    name: "Band3",
                    image: "url_to_image3.jpg"
                }
            ]
        };
    }

    render() {
        return (
            <ul className="fb-list">
                {this.state.items.map((item, index) => (
                    <FlexboxItem key={index} item={item} />
                ))}
            </ul>
        );
    }
}

export default FlexboxList;
