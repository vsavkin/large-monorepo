import { render } from '@testing-library/react';

import Alert161 from './alert161';

describe('Alert161', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert161 />);
    expect(baseElement).toBeTruthy();
  });
});
