# Pokédex

The following can be seen on https://pokemon.gustavo.torregrosa.dev

I would add the following:
- The project is running in docker and we have a Jenkins app to deploy it (it is in https://jenkins.gustavo.torregrosa.dev and you can use the user/pass gustavo/gustavo01)
- The project also has sonarqube implementation as well as observabilty with grafana and prometheus (https://grafana.gustavo.torregrosa.dev/d/rYdddlPWk/node-exporter-full?orgId=1&refresh=1m&from=now-15m&to=now) admin/gustavo01
- on the API side, I used NestJS with a Domain Driven Design arch. The domain service receives the repository from the infra but keeps the logic to itself
- Jest testing to mock the service
- On the APP side,  used angular as requested. Also, the Angular Material lib and tailwind.
- Im using a service to collect (and cache) the pokemon info. You can notice the second time you click on a pokemon it will open up faster.