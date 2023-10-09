const handleDeleteBuilding = (id) => {
    axios.delete(http://localhost:4000/api/buildings/${id})
        .then(res => setBuildings(buildings.filter(building => building.id!== id)))
        .catch(err => console.log(err));
};

const handleUpdateBuilding = (id) => {
    axios.put('http://localhost:4000/api/buildings'/${id}, { name, address,Plak,floorsCount, description })
        .then(res => {
            setBuildings(buildings.map(building => building.id === id? res.data : building));
            setEditMode(false);
            setEditId(null);
            setName('');
            setAddress('');
            setDescription('');
        })
        .catch(err => console.log(err));
};

const handleCreateBuilding = () => {
    axios.post('http://localhost:4000/api/buildings', { name, address,plak,floorsCount, description })
        .then(res => {
            setBuildings([...buildings, res.data]);
            setName('');
            setAddress('');
            setDescription('');
        })
        .catch(err => console.log(err));
};

useEffect(() => {
    axios.get('http://localhost:4000/api/buildings')
        .then(res => setBuildings(res.data))
        .catch(err => console.log(err));
}, []);