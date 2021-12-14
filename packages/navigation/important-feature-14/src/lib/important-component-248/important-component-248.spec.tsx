import { render } from '@testing-library/react';

import ImportantComponent248 from './important-component-248';

describe('ImportantComponent248', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent248 />);
    expect(baseElement).toBeTruthy();
  });
});
