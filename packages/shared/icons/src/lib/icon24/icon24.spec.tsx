import { render } from '@testing-library/react';

import Icon24 from './icon24';

describe('Icon24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon24 />);
    expect(baseElement).toBeTruthy();
  });
});
