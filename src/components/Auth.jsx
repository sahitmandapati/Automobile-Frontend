import React from 'react'

function Auth() {

    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className='auth py-36 max-sm:px-5'>
            <h1 className='text-2xl font-bold text-center font-sans p-10 max-sm:px-5'>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="auth-card flex flex-col lg:w-6/12 m-auto space-y-5">
                <input className='p-2 border-neutral-500 border rounded' onChange={handleChange} value={loginFormData.email} type="email" placeholder='Email address' name="email" id="email" />
                <input className='p-2 border-neutral-500 border rounded' onChange={handleChange} value={loginFormData.password} type="password" placeholder='Password' name="password" id="password" />
                <button className='bg-[#FF8C38] text-white font-bold py-2 rounded'>Sign in</button>
            </form>
            <p className='text-center pt-10'>Don't have an account? <span className='text-[#FF8C38]'>Create one now</span></p>
        </div>
    )
}

export default Auth