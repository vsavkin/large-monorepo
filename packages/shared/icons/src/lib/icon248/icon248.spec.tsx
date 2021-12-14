import { render } from '@testing-library/react';

import Icon248 from './icon248';

describe('Icon248', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon248 />);
    expect(baseElement).toBeTruthy();
  });
});
