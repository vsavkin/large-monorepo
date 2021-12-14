import { render } from '@testing-library/react';

import Component84 from './component84';

describe('Component84', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component84 />);
    expect(baseElement).toBeTruthy();
  });
});
