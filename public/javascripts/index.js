const updateTaskStatus = (id, status) => {
    fetch('/tasks/updateStatus', {
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: `id=${id}&status=${status}`
    })
    .finally(() => {
        window.location = '/'
    })
}

const removeRecord = (id) => {
    fetch('/operations/removeRecord', {
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: `id=${id}`
    })
    .finally(() => {
        window.location = '/'
    })
}

const displayNewData = () => {
    fetch('/displayMail', {
        method: 'post'
    })
    .finally(() => {
        window.location = '/'
    })
}