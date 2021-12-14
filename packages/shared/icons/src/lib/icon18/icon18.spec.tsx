import { render } from '@testing-library/react';

import Icon18 from './icon18';

describe('Icon18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon18 />);
    expect(baseElement).toBeTruthy();
  });
});
