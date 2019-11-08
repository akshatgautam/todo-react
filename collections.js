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
}

Todo: {
    description: string,
    status: string, // done or pending
    id: string,
    userId: string,
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
        name,
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
        status,
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
        status
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