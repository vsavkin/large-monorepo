import { render } from '@testing-library/react';

import Dialog19 from './dialog19';

describe('Dialog19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog19 />);
    expect(baseElement).toBeTruthy();
  });
});
