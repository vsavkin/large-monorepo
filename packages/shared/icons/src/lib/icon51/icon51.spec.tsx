import { render } from '@testing-library/react';

import Icon51 from './icon51';

describe('Icon51', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon51 />);
    expect(baseElement).toBeTruthy();
  });
});
