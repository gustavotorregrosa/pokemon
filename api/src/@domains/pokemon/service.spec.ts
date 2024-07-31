import { IPokemonRepository } from "./repository.interface"
import { PokemonService } from "./service"

describe('testing pokemon service', () => {

    let repository: IPokemonRepository;
    let service: PokemonService;

    beforeAll(() => {
        repository = {
            findOneById: jest.fn(),
            loadMany: jest.fn()
        }

        service = new PokemonService(repository)
    })

    it('get many', async () => {
        const pokemonList = await service.loadMany({limit: '', offset: ''});
        expect(repository.loadMany).toHaveBeenCalled();
    })

    it('get one', async () => {
        const pokemonList = await service.findOneById('1')
        expect(repository.findOneById).toHaveBeenCalled();
    })


})