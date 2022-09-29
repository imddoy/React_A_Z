import React from 'react';

export default function Form({ handleSubmit, value, setValue }) {
    const handleChange = (e) =>{
        console.log('e',e.target.value);
        // this.setState({ value: e.target.value});
        setValue(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex pt-2">
                <input 
                type="text" 
                name="value" 
                className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
                placeholder="해야 할 일을 입력하세요."
                value={value}
                onChange={handleChange}
                />
                <input
                value="입력"
                type="submit"
                className="p-2 text-pink-300 border-2 border-pink-200 rounded hover:text-white hover:bg-pink-200"
                />
            </form>
        </div>
    )
}
