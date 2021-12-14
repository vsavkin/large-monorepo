import { render } from '@testing-library/react';

import Icon162 from './icon162';

describe('Icon162', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon162 />);
    expect(baseElement).toBeTruthy();
  });
});
