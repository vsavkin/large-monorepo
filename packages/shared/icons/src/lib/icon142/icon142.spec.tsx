import { render } from '@testing-library/react';

import Icon142 from './icon142';

describe('Icon142', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon142 />);
    expect(baseElement).toBeTruthy();
  });
});
