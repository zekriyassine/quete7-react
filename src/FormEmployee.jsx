import React from 'react';
import './FormEmployee.css'


class FormEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            poster: '',
            comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }


    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    submitForm(e) {
        e.preventDefault();
        const poster = " http://campus-bordeaux.ovh:3001/api/quests/movies/";
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };

        fetch(poster, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`film enregistré!`);
                }
            }).catch(e => {
                console.error(e);
                alert('Erreur lors de l\'ajout d\'un film');
            });
    }

    render() {
        return (
            <div className="FormEmployee">
                <h1>film préferé</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Informations</legend>
                        <div className="form-data">
                            <label htmlFor="name">Nom du film</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={this.onChange}
                                value={this.state.name}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="poster">url du poster</label>
                            <input
                                type="text"
                                id="poster"
                                name="poster"
                                onChange={this.onChange}
                                value={this.state.poster}
                            />
                        </div>

                        <div className="form-data comment">
                            <label htmlFor="comment">comment</label>
                            <textarea
                                type="text"
                                id="comment"
                                name="comment"
                                onChange={this.onChange}
                                value={this.state.comment}
                                placeholder="pourquoi tu aimes ce name? qu'est-ce qui t'a marqué? etc"
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Envoyer" />
                        </div>
                    </fieldset>
                </form>
            </div>
        )

    }
}

export default FormEmployee;

