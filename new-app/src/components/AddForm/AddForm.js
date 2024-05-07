import { useState } from 'react';

function AddForm({ addNote }) {

    const [form, setForm] = useState({ content: '' });

    const onChange = (e) => {
        const { name, value } = e.target;

        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addNote(form);
        setForm({ content: '' });
    };

    return (
        <form
            className=''
            style={{ width: '350px', height: '200px' }}
            onSubmit={onSubmit}
        >
            <div className='d-flex flex-column position-relative'>
                <label htmlFor='content' className='form-label fs-3'>
                    New note
                </label>
                <textarea
                    className='form-control p-3 border border-primary border-2 fs-6'
                    style={{ height: '150px' }}
                    id='content'
                    name='content'
                    value={form.content}
                    onChange={onChange}
                />
                <button
                    className='btn btn-secondary position-absolute'
                    style={{ right: '-35px', bottom: '0px' }}
                    type='submit'
                >
                    {'\u27A4'}
                </button>
            </div>
        </form>
    );
}

export default AddForm;