import { render } from '@testing-library/react';

import ImportantComponent247 from './important-component-247';

describe('ImportantComponent247', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent247 />);
    expect(baseElement).toBeTruthy();
  });
});
