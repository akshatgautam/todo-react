/*

Collections
_________________________________________________

User: {
    name: string,
    email: string,
    password: string,
    id: string
}

Bucket: {
    name: string,
    id: string,
    userId: string,
}

Todo: {
    description: string,
    done: boolean, // true or false
    id: string,
    bucketId: string
}

APIs
________________________________________________

/api

* Register
    -POST
    -/user/register
    -REQ - {
        name,
        password,
        email,
    }
    -RES - {
        token
    }

*Login
    -POST
    -/user/login
    -REQ - {
        password,
        email,
    }
    -RES - {
        token
    }

*Create TODO
    -POST
    -/todo/create
    -REQ - {
        description,
        bucketId
    }
    -RES - {
        description,
        done,
        id,
        userId,
        bucketId
    }

*Edit TODO
    -POST
    -/todo/edit/:id
    -REQ - {
        description
    }
    -RES - {
        updated: true
    }

*Delete TODO
    -DELETE
    -/todo/delete/:id
    -REQ - {}
    -RES - {
        deleted: true
    }

*Done/Pending Updation
    -POST
    -/todo/toggle/:id
    -REQ - {}
    -RES - {
        done
    }

*Create Bucket
    -POST
    -/bucket/create
    -REQ - {
        name
    }
    -RES - {
        name,
        id
    }


*Fetching Bucket's List
    -GET
    -/bucket/list
    -RES - {
        // bucket list
    }

*Fetching Bucket TODOs
    -GET
    -/bucket/:id
    -RES - {
        // all todos in the bucket
    }




*/