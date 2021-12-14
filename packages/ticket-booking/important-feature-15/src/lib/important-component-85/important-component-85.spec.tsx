import { render } from '@testing-library/react';

import ImportantComponent85 from './important-component-85';

describe('ImportantComponent85', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent85 />);
    expect(baseElement).toBeTruthy();
  });
});
