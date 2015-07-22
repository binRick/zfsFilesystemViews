module.exports = {
        Snapshot: Servers: {
            List: {
                key: 'Snapshot_Servers_List',
                field: 2,
                ttl: 30,
                matches: ['tank/Snapshots/[a-z]*.[a-z]/tank$'],
		unique: true,
            }
        },
    },
};
