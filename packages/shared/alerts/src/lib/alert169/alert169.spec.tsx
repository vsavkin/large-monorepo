import { render } from '@testing-library/react';

import Alert169 from './alert169';

describe('Alert169', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert169 />);
    expect(baseElement).toBeTruthy();
  });
});
