import { render } from '@testing-library/react';

import ImportantComponent140 from './important-component-140';

describe('ImportantComponent140', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent140 />);
    expect(baseElement).toBeTruthy();
  });
});
