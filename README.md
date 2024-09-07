### Usage

Example

    import { omit, pick } from '@tinychange/omit-pick'

    const user = {
    	name : "David",
    	age: 23,
    	address: "USA",
    	gender: "male"
    }

    // take address, gender only
    console.log(
    	pick(user, ["address", "gender"])
    )

    // remove name, and gender
    console.log(
    	omit(user, ["name", "gender"])
    )
