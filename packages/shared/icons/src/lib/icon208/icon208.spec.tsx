import { render } from '@testing-library/react';

import Icon208 from './icon208';

describe('Icon208', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon208 />);
    expect(baseElement).toBeTruthy();
  });
});
