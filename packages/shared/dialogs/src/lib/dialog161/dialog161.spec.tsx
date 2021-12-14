import { render } from '@testing-library/react';

import Dialog161 from './dialog161';

describe('Dialog161', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog161 />);
    expect(baseElement).toBeTruthy();
  });
});
