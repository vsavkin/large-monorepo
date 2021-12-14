import { render } from '@testing-library/react';

import Icon110 from './icon110';

describe('Icon110', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon110 />);
    expect(baseElement).toBeTruthy();
  });
});
