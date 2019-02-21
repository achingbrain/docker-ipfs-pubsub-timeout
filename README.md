# IPFS pubsub between Docker containers stops working after a while

Build the Docker container and start two instances:

```console
$ docker-compose build
$ docker-compose up
```

Sample output:

```console
[$ docker-compose up
Creating network "docker-ipfs-pubsub-timeout_default" with the default driver
Creating docker-ipfs-pubsub-timeout_receiver_1 ... done
Creating docker-ipfs-pubsub-timeout_sender_1   ... done
Attaching to docker-ipfs-pubsub-timeout_receiver_1, docker-ipfs-pubsub-timeout_sender_1
sender_1    | Swarm listening on /ip4/127.0.0.1/tcp/9004/ipfs/QmWp9WbAVUbTrLusZGAQwWoaK7L85agMTKpwSoX44bGPiC
sender_1    | Swarm listening on /ip4/172.23.0.3/tcp/9004/ipfs/QmWp9WbAVUbTrLusZGAQwWoaK7L85agMTKpwSoX44bGPiC
sender_1    | Swarm listening on /ip4/127.0.0.1/tcp/9005/ws/ipfs/QmWp9WbAVUbTrLusZGAQwWoaK7L85agMTKpwSoX44bGPiC
receiver_1  | Swarm listening on /ip4/127.0.0.1/tcp/9000/ipfs/QmeKYmtKrUsNjvoRNjnsgv1A8ERM1kxFnjY2V5uTLeeK6U
receiver_1  | Swarm listening on /ip4/172.23.0.2/tcp/9000/ipfs/QmeKYmtKrUsNjvoRNjnsgv1A8ERM1kxFnjY2V5uTLeeK6U
receiver_1  | Swarm listening on /ip4/127.0.0.1/tcp/9001/ws/ipfs/QmeKYmtKrUsNjvoRNjnsgv1A8ERM1kxFnjY2V5uTLeeK6U
receiver_1  | Subscribed to my-super-fun-topic
sender_1    | Publishing message
receiver_1  | Received { from: 'QmWp9WbAVUbTrLusZGAQwWoaK7L85agMTKpwSoX44bGPiC',
receiver_1  |   data: 'Hello, it is 2/16/2019, 22:21:07 UTC' }
...repeat]($ docker-compose up
Starting docker-ipfs-pubsub-timeout_receiver_1 ... done
Starting docker-ipfs-pubsub-timeout_sender_1   ... done
Attaching to docker-ipfs-pubsub-timeout_receiver_1, docker-ipfs-pubsub-timeout_sender_1
receiver_1  | 2019-02-21T14:24:40.472Z libp2p:floodsub starting
receiver_1  | 2019-02-21T14:24:40.476Z libp2p:floodsub started
receiver_1  | Swarm listening on /ip4/127.0.0.1/tcp/23381/ipfs/QmNs7GP5wwnMCx19TcskD6TqFZkn5y8JXBw9wsLZa3NBBj
receiver_1  | Swarm listening on /ip4/172.26.0.3/tcp/23381/ipfs/QmNs7GP5wwnMCx19TcskD6TqFZkn5y8JXBw9wsLZa3NBBj
receiver_1  | Swarm listening on /ip4/127.0.0.1/tcp/6376/ws/ipfs/QmNs7GP5wwnMCx19TcskD6TqFZkn5y8JXBw9wsLZa3NBBj
sender_1    | 2019-02-21T14:24:40.713Z libp2p:floodsub starting
sender_1    | 2019-02-21T14:24:40.717Z libp2p:floodsub started
sender_1    | Swarm listening on /ip4/127.0.0.1/tcp/9002/ipfs/QmVrSUNwAKLH7cZ2k27Mi8gC6A7vayXeJ7sGHkRwEXiVim
sender_1    | Swarm listening on /ip4/172.26.0.2/tcp/9002/ipfs/QmVrSUNwAKLH7cZ2k27Mi8gC6A7vayXeJ7sGHkRwEXiVim
sender_1    | Swarm listening on /ip4/127.0.0.1/tcp/9003/ws/ipfs/QmVrSUNwAKLH7cZ2k27Mi8gC6A7vayXeJ7sGHkRwEXiVim
receiver_1  | Subscribed to my-super-fun-topic
receiver_1  | 2019-02-21T14:24:41.592Z libp2p:floodsub dialing QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z
receiver_1  | 2019-02-21T14:24:41.695Z libp2p:floodsub dialing QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm
receiver_1  | 2019-02-21T14:24:41.744Z libp2p:floodsub dialing QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ
receiver_1  | 2019-02-21T14:24:41.746Z libp2p:floodsub dialing QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM
receiver_1  | 2019-02-21T14:24:41.753Z libp2p:floodsub new peer QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z
receiver_1  | 2019-02-21T14:24:41.789Z libp2p:floodsub dialing QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64
receiver_1  | 2019-02-21T14:24:41.844Z libp2p:floodsub dial to QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z complete
receiver_1  | 2019-02-21T14:24:41.846Z libp2p:floodsub connected QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z
receiver_1  | 2019-02-21T14:24:41.867Z libp2p:floodsub rpc from QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z
receiver_1  | 2019-02-21T14:24:41.874Z libp2p:floodsub dialing QmVrSUNwAKLH7cZ2k27Mi8gC6A7vayXeJ7sGHkRwEXiVim
receiver_1  | 2019-02-21T14:24:41.957Z libp2p:floodsub new peer QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ
sender_1    | 2019-02-21T14:24:41.964Z libp2p:floodsub dialing QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ
sender_1    | 2019-02-21T14:24:41.988Z libp2p:floodsub dialing QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM
receiver_1  | 2019-02-21T14:24:42.005Z libp2p:floodsub new peer QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM
receiver_1  | 2019-02-21T14:24:42.062Z libp2p:floodsub new peer QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm
sender_1    | 2019-02-21T14:24:42.080Z libp2p:floodsub dialing QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z
receiver_1  | 2019-02-21T14:24:42.103Z libp2p:floodsub new peer QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64
sender_1    | 2019-02-21T14:24:42.161Z libp2p:floodsub new peer QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ
receiver_1  | 2019-02-21T14:24:42.191Z libp2p:floodsub dial to QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ complete
receiver_1  | 2019-02-21T14:24:42.191Z libp2p:floodsub connected QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ
receiver_1  | 2019-02-21T14:24:42.212Z libp2p:floodsub rpc from QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ
receiver_1  | 2019-02-21T14:24:42.218Z libp2p:floodsub dial to QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM complete
receiver_1  | 2019-02-21T14:24:42.223Z libp2p:floodsub connected QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM
receiver_1  | 2019-02-21T14:24:42.229Z libp2p:floodsub rpc from QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM
sender_1    | 2019-02-21T14:24:42.233Z libp2p:floodsub dialing QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm
sender_1    | 2019-02-21T14:24:42.236Z libp2p:floodsub new peer QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM
sender_1    | 2019-02-21T14:24:42.261Z libp2p:floodsub dialing QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64
receiver_1  | 2019-02-21T14:24:42.315Z libp2p:floodsub dial to QmVrSUNwAKLH7cZ2k27Mi8gC6A7vayXeJ7sGHkRwEXiVim complete
receiver_1  | 2019-02-21T14:24:42.315Z libp2p:floodsub connected QmVrSUNwAKLH7cZ2k27Mi8gC6A7vayXeJ7sGHkRwEXiVim
receiver_1  | 2019-02-21T14:24:42.316Z libp2p:floodsub new peer QmVrSUNwAKLH7cZ2k27Mi8gC6A7vayXeJ7sGHkRwEXiVim
sender_1    | 2019-02-21T14:24:42.325Z libp2p:floodsub dialing QmNs7GP5wwnMCx19TcskD6TqFZkn5y8JXBw9wsLZa3NBBj
sender_1    | 2019-02-21T14:24:42.329Z libp2p:floodsub already dialing QmNs7GP5wwnMCx19TcskD6TqFZkn5y8JXBw9wsLZa3NBBj, ignoring dial attempt
receiver_1  | 2019-02-21T14:24:42.332Z libp2p:floodsub dial to QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm complete
receiver_1  | 2019-02-21T14:24:42.332Z libp2p:floodsub connected QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm
receiver_1  | 2019-02-21T14:24:42.335Z libp2p:floodsub rpc from QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm
sender_1    | 2019-02-21T14:24:42.335Z libp2p:floodsub already dialing QmNs7GP5wwnMCx19TcskD6TqFZkn5y8JXBw9wsLZa3NBBj, ignoring dial attempt
receiver_1  | 2019-02-21T14:24:42.366Z libp2p:floodsub dial to QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64 complete
receiver_1  | 2019-02-21T14:24:42.366Z libp2p:floodsub connected QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64
receiver_1  | 2019-02-21T14:24:42.368Z libp2p:floodsub rpc from QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64
receiver_1  | 2019-02-21T14:24:42.374Z libp2p:floodsub dialing QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3
sender_1    | Publishing message length 4194176
sender_1    | 2019-02-21T14:24:42.403Z libp2p:floodsub publish my-super-fun-topic <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... >
sender_1    | 2019-02-21T14:24:42.411Z libp2p:floodsub dial to QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM complete
sender_1    | 2019-02-21T14:24:42.412Z libp2p:floodsub connected QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM
sender_1    | 2019-02-21T14:24:42.422Z libp2p:floodsub rpc from QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM
sender_1    | 2019-02-21T14:24:42.454Z libp2p:floodsub dial to QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ complete
sender_1    | 2019-02-21T14:24:42.455Z libp2p:floodsub connected QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ
sender_1    | 2019-02-21T14:24:42.457Z libp2p:floodsub rpc from QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ
sender_1    | 2019-02-21T14:24:42.476Z libp2p:floodsub new peer QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z
receiver_1  | 2019-02-21T14:24:42.503Z libp2p:floodsub dialing QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic
receiver_1  | 2019-02-21T14:24:42.526Z libp2p:floodsub dialing QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd
receiver_1  | 2019-02-21T14:24:42.569Z libp2p:floodsub new peer QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3
sender_1    | 2019-02-21T14:24:42.610Z libp2p:floodsub new peer QmNs7GP5wwnMCx19TcskD6TqFZkn5y8JXBw9wsLZa3NBBj
sender_1    | 2019-02-21T14:24:42.610Z libp2p:floodsub rpc from QmNs7GP5wwnMCx19TcskD6TqFZkn5y8JXBw9wsLZa3NBBj
sender_1    | 2019-02-21T14:24:42.612Z libp2p:floodsub dial to QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z complete
sender_1    | 2019-02-21T14:24:42.612Z libp2p:floodsub connected QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z
sender_1    | 2019-02-21T14:24:42.613Z libp2p:floodsub rpc from QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z
sender_1    | 2019-02-21T14:24:42.618Z libp2p:floodsub new peer QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm
sender_1    | 2019-02-21T14:24:42.649Z libp2p:floodsub new peer QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64
sender_1    | 2019-02-21T14:24:42.680Z libp2p:floodsub dial to QmNs7GP5wwnMCx19TcskD6TqFZkn5y8JXBw9wsLZa3NBBj complete
sender_1    | 2019-02-21T14:24:42.680Z libp2p:floodsub connected QmNs7GP5wwnMCx19TcskD6TqFZkn5y8JXBw9wsLZa3NBBj
receiver_1  | 2019-02-21T14:24:42.697Z libp2p:floodsub new peer QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic
sender_1    | 2019-02-21T14:24:42.723Z libp2p:floodsub dial to QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm complete
sender_1    | 2019-02-21T14:24:42.723Z libp2p:floodsub connected QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm
sender_1    | 2019-02-21T14:24:42.724Z libp2p:floodsub rpc from QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm
sender_1    | 2019-02-21T14:24:42.726Z libp2p:floodsub dial to QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64 complete
sender_1    | 2019-02-21T14:24:42.726Z libp2p:floodsub connected QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64
receiver_1  | 2019-02-21T14:24:42.737Z libp2p:floodsub dial to QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic complete
receiver_1  | 2019-02-21T14:24:42.738Z libp2p:floodsub connected QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic
sender_1    | 2019-02-21T14:24:42.759Z libp2p:floodsub rpc from QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64
receiver_1  | 2019-02-21T14:24:42.793Z libp2p:floodsub new peer QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd
sender_1    | 2019-02-21T14:24:42.815Z libp2p:floodsub dialing QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic
receiver_1  | 2019-02-21T14:24:42.830Z libp2p:floodsub dial to QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3 complete
receiver_1  | 2019-02-21T14:24:42.830Z libp2p:floodsub connected QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3
receiver_1  | 2019-02-21T14:24:42.836Z libp2p:floodsub rpc from QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3
sender_1    | 2019-02-21T14:24:42.838Z libp2p:floodsub dialing QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3
receiver_1  | 2019-02-21T14:24:42.854Z libp2p:floodsub rpc from QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic
receiver_1  | 2019-02-21T14:24:42.855Z libp2p:floodsub dialing QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu
sender_1    | 2019-02-21T14:24:42.926Z libp2p:floodsub dialing QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd
sender_1    | 2019-02-21T14:24:42.943Z libp2p:floodsub new peer QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic
receiver_1  | 2019-02-21T14:24:42.952Z libp2p:floodsub dial to QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd complete
receiver_1  | 2019-02-21T14:24:42.952Z libp2p:floodsub connected QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd
sender_1    | 2019-02-21T14:24:43.016Z libp2p:floodsub dial to QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic complete
sender_1    | 2019-02-21T14:24:43.017Z libp2p:floodsub connected QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic
sender_1    | 2019-02-21T14:24:43.021Z libp2p:floodsub new peer QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3
receiver_1  | 2019-02-21T14:24:43.065Z libp2p:floodsub rpc from QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd
sender_1    | 2019-02-21T14:24:43.118Z libp2p:floodsub rpc from QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic
receiver_1  | 2019-02-21T14:24:43.170Z libp2p:floodsub dialing Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6
receiver_1  | 2019-02-21T14:24:43.183Z libp2p:floodsub new peer QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu
sender_1    | 2019-02-21T14:24:43.303Z libp2p:floodsub new peer QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd
sender_1    | 2019-02-21T14:24:43.306Z libp2p:floodsub dialing QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu
sender_1    | 2019-02-21T14:24:43.307Z libp2p:floodsub dial to QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3 complete
sender_1    | 2019-02-21T14:24:43.307Z libp2p:floodsub connected QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3
sender_1    | 2019-02-21T14:24:43.307Z libp2p:floodsub rpc from QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3
sender_1    | 2019-02-21T14:24:43.324Z libp2p:floodsub dial to QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd complete
sender_1    | 2019-02-21T14:24:43.324Z libp2p:floodsub connected QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd
receiver_1  | 2019-02-21T14:24:43.356Z libp2p:floodsub new peer Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6
sender_1    | 2019-02-21T14:24:43.406Z libp2p:floodsub dialing Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6
receiver_1  | 2019-02-21T14:24:43.417Z libp2p:floodsub dial to QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu complete
receiver_1  | 2019-02-21T14:24:43.417Z libp2p:floodsub connected QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu
sender_1    | Publishing message length 4194177
sender_1    | 2019-02-21T14:24:43.437Z libp2p:floodsub publish my-super-fun-topic <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... >
receiver_1  | 2019-02-21T14:24:43.479Z libp2p:floodsub rpc from QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu
receiver_1  | 2019-02-21T14:24:43.511Z libp2p:floodsub dial to Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6 complete
receiver_1  | 2019-02-21T14:24:43.511Z libp2p:floodsub connected Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6
receiver_1  | 2019-02-21T14:24:43.515Z libp2p:floodsub rpc from Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6
sender_1    | 2019-02-21T14:24:43.543Z libp2p:floodsub publish msgs on topics [ 'my-super-fun-topic' ] QmNs7GP5wwnMCx19TcskD6TqFZkn5y8JXBw9wsLZa3NBBj
sender_1    | 2019-02-21T14:24:43.644Z libp2p:floodsub rpc from QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd
receiver_1  | 2019-02-21T14:24:43.649Z libp2p:floodsub remove QmVrSUNwAKLH7cZ2k27Mi8gC6A7vayXeJ7sGHkRwEXiVim 2
receiver_1  | 2019-02-21T14:24:43.651Z libp2p:floodsub connection ended QmVrSUNwAKLH7cZ2k27Mi8gC6A7vayXeJ7sGHkRwEXiVim stream ended with:0 but wanted:1
receiver_1  | 2019-02-21T14:24:43.652Z libp2p:floodsub remove QmVrSUNwAKLH7cZ2k27Mi8gC6A7vayXeJ7sGHkRwEXiVim 1
receiver_1  | 2019-02-21T14:24:43.652Z libp2p:floodsub delete peer QmVrSUNwAKLH7cZ2k27Mi8gC6A7vayXeJ7sGHkRwEXiVim
sender_1    | 2019-02-21T14:24:43.734Z libp2p:floodsub new peer QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu
sender_1    | 2019-02-21T14:24:43.799Z libp2p:floodsub remove QmNs7GP5wwnMCx19TcskD6TqFZkn5y8JXBw9wsLZa3NBBj 2
sender_1    | 2019-02-21T14:24:43.799Z libp2p:floodsub connection ended QmNs7GP5wwnMCx19TcskD6TqFZkn5y8JXBw9wsLZa3NBBj 
sender_1    | 2019-02-21T14:24:43.800Z libp2p:floodsub remove QmNs7GP5wwnMCx19TcskD6TqFZkn5y8JXBw9wsLZa3NBBj 1
sender_1    | 2019-02-21T14:24:43.800Z libp2p:floodsub delete peer QmNs7GP5wwnMCx19TcskD6TqFZkn5y8JXBw9wsLZa3NBBj
sender_1    | 2019-02-21T14:24:43.954Z libp2p:floodsub new peer Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6
sender_1    | 2019-02-21T14:24:43.967Z libp2p:floodsub dial to QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu complete
sender_1    | 2019-02-21T14:24:43.967Z libp2p:floodsub connected QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu
sender_1    | 2019-02-21T14:24:44.001Z libp2p:floodsub dial to Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6 complete
sender_1    | 2019-02-21T14:24:44.001Z libp2p:floodsub connected Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6
sender_1    | 2019-02-21T14:24:44.006Z libp2p:floodsub rpc from QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu
sender_1    | 2019-02-21T14:24:44.105Z libp2p:floodsub rpc from Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6
sender_1    | Publishing message length 4194178
sender_1    | 2019-02-21T14:24:44.435Z libp2p:floodsub publish my-super-fun-topic <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... >
sender_1    | Publishing message length 4194179
sender_1    | 2019-02-21T14:24:45.436Z libp2p:floodsub publish my-super-fun-topic <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... >
sender_1    | Publishing message length 4194180
sender_1    | 2019-02-21T14:24:46.439Z libp2p:floodsub publish my-super-fun-topic <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... >
)
```

We send ever-increasing pubsub messages - when they reach `4194177` bytes, the receiver disconnects from the sender.
