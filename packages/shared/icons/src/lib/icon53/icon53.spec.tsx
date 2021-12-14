import { render } from '@testing-library/react';

import Icon53 from './icon53';

describe('Icon53', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon53 />);
    expect(baseElement).toBeTruthy();
  });
});
