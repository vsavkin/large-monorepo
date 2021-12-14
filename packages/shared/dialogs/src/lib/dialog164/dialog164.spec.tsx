import { render } from '@testing-library/react';

import Dialog164 from './dialog164';

describe('Dialog164', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog164 />);
    expect(baseElement).toBeTruthy();
  });
});
