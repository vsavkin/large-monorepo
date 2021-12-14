import { render } from '@testing-library/react';

import Icon151 from './icon151';

describe('Icon151', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon151 />);
    expect(baseElement).toBeTruthy();
  });
});
