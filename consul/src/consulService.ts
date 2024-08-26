import Consul from 'consul';

export class ConsulService {
  private consul: Consul.Consul;

  constructor() {
    this.consul = new Consul();
  }

  registerService(serviceName: string, serviceHost: string, servicePort: number) {
    const serviceId = `${serviceName}-${serviceHost}-${servicePort}`;

    this.consul.agent.service.register({
      id: serviceId,
      name: serviceName,
      address: serviceHost,
      port: servicePort,
      check: {
        http: `http://${serviceHost}:${servicePort}/health`,
        interval: '10s',
      },
    }, (err) => {
      if (err) {
        console.error('Error registering service with Consul:', err);
      } else {
        console.log(`Service ${serviceName} registered with Consul successfully`);
      }
    });
  }

  deregisterService(serviceId: string) {
    this.consul.agent.service.deregister(serviceId, (err) => {
      if (err) {
        console.error('Error deregistering service with Consul:', err);
      } else {
        console.log(`Service ${serviceId} deregistered from Consul successfully`);
      }
    });
  }
}
