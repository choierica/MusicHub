import React, {Component} from "react";
import "../style/questionpage.css";
import {connect} from "react-redux";
import {setInitial, addContent, deleteContent} from "../actions/landingpage";
import MusicPlayer from "react-responsive-music-player";


class TextArea extends Component {

    callPostAPI = async () => {
        const input = {body: this.inputNode.value};
        const response = await fetch("/post", {
            method: 'POST',
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    handleSubmit = event => {
        event.preventDefault();
        const parent = this;
        parent
            .callPostAPI()
            .then(res => parent.props.addContent(res.response))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div id="inner">
                    <div id="music">
                        <MusicPlayer playlist={playlist}/>
                    </div>
                </div>
                <div id="textbox">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input
                                placeholder="Please post your favourite music"
                                type="text"
                                name="username"
                                ref={node => (this.inputNode = node)}
                            />
                        </label>
                        <button id="buttons" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

const playlist = [
    {
        url: "https://res.cloudinary.com/duehwryfv/video/upload/v1560749961/Seong-Jin_Cho_-_Claude_Debussy_Clair_de_lune_Suite_bergamasque_L._75_xpbjte.mp3",
        cover: 'https://res.cloudinary.com/duehwryfv/image/upload/v1560756151/Moon_cxeqpq.jpg',
        title: 'Clair de Lune',
        artist: [
            'Claude Debussy'
        ]
    },
    {
        url: 'https://res.cloudinary.com/duehwryfv/video/upload/v1560757664/Chopin_-_Nocturne_op.9_No.2_uydixo.mp3',
        cover: 'https://res.cloudinary.com/duehwryfv/image/upload/v1560757720/StarryNight_dtuib9.jpg',
        title: 'Nocturne Op.9 No.2',
        artist: ['Frédéric Chopin']
    },
    {
        url: 'https://res.cloudinary.com/duehwryfv/video/upload/v1560758566/Chopin_Fantaisie_Impromptu_n3eg7g.mp3',
        cover: 'https://res.cloudinary.com/duehwryfv/image/upload/v1560758632/Fantasie_rybdba.jpg',
        title: 'Fantaisie Impromptu ',
        artist: ['Frédéric Chopin']
    }
];

const mapStateToProps = state => {
    return {count: state.count};
};

export default connect(
    mapStateToProps,
    {setInitial, addContent, deleteContent}
)(TextArea);